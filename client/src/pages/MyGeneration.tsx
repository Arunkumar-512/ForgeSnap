import { useEffect, useState } from "react";
import { type IThumbnail } from "../assets/assets";
import SoftBackDrop from "../components/SoftBackDrop";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRightIcon, DownloadIcon, TrashIcon } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import api from "../configs/api";
import toast from "react-hot-toast";

const MyGeneration = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const aspectRatioClassMap = {
    "16:9": "aspect-video",
    "1:1": "aspect-square",
    "9:16": "aspect-[9/16]",
  } as Record<string, string>;

  const [thumbnails, setThumbnails] = useState<IThumbnail[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchThumbnails = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/api/user/thumbnails");
      setThumbnails(data.thumbnails || []);
    } catch (error: any) {
      console.error(error);
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (image_url: string) => {
    const link = document.createElement("a");
    link.href = image_url.replace("/upload", "/upload/fl_attachment");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  const handleDelete = async (id: string) => {
    try {
      const confirm = window.confirm(
        "Are you sure ypu want to delete this thumbnail?",
      );
      if (!confirm) return;
      const { data } = await api.delete(`/api/thumbnail/delete/${id}`);
      toast.success(data.message);
      setThumbnails(thumbnails.filter((t) => t._id !== id));
    } catch (error: any) {
      console.error(error);
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchThumbnails();
    }
  }, []);

  return (
    <>
      <SoftBackDrop />
      <div className="mt-32 min-h-screen px-6 md:px-15 lg-px-23 xl:px-32">
        {/* HEADER */}
        <div className="mb-9">
          <h1 className="text-2xl font-bold text-zinc-200">My Generations</h1>
          <p className="text-sm text-zinc-400 mt-1">
            View and manage all your AI-generated thumbnails
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <div>
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/8 border border-white/12 animate-pulse h-[260px]"
              />
            ))}
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && thumbnails.length === 0 && (
          <div className="text-center py-24">
            <h2 className="text-lg font-semibold text-zinc-200">
              No thumbnails yet
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Generate your first thumbnail to see it here
            </p>
          </div>
        )}

        {/* GRID */}
        {!loading && thumbnails.length > 0 && (
          <div className="columns-1 sm:columns-2 lg-columns-3 2xl-columns-4 gap-8">
            {thumbnails.map((thumb: IThumbnail) => {
              const aspectClass =
                aspectRatioClassMap[thumb.aspect_ratio || "16:9"];
              return (
                <div
                  key={thumb._id}
                  onClick={() => navigate(`/generate/${thumb._id}`)}
                  className="mb-8 group relative cursor-pointer rounded-2xl bg-white/8 border border-white/12 transition shadow-xl break-inside-avoid"
                >
                  <div
                    className={`relative overflow-hidden rounded-t-2xl ${aspectClass} bg-black/25`}
                  >
                    {thumb.image_url ? (
                      <img
                        src={thumb.image_url}
                        alt={thumb.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sm text-zinc-400">
                        {thumb.isGenerating ? "Generating..." : "No Image"}
                      </div>
                    )}

                    {thumb.isGenerating && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-sm font-medium text-indigo-200">
                        Generating...
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-semibold text-zinc-100">
                      {thumb.title}
                    </h3>
                    <div className="flex flex-warp gap-2 text-xs text-zinc-400">
                      <span className="px-2 py-0.5 rounded bg-white/10">
                        {thumb.style}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/10">
                        {thumb.color_scheme}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/10">
                        {thumb.aspect_ratio}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500">
                      {new Date(thumb.createdAt!).toDateString()}
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div
                    className="absolute bottom-2 right-2 max-sm:flex sm:hidden group-hover:flex gap-1.5"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <TrashIcon
                      onClick={() => handleDelete(thumb._id)}
                      className="size-6 bg-black/40 p-1 rounded hover:bg-indigo-600 transition-all"
                    />

                    <DownloadIcon
                      onClick={() => handleDownload(thumb.image_url!)}
                      className="size-6 bg-black/40 p-1 rounded hover:bg-cyan-600 transition-all"
                    />

                    <Link
                      target="_blank"
                      to={`/preview?thumbnail_url=${thumb.image_url}&title=${thumb.title}`}
                    >
                      <ArrowUpRightIcon className="size-6 bg-black/40 p-1 rounded hover:bg-violet-600 transition-all" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default MyGeneration;
