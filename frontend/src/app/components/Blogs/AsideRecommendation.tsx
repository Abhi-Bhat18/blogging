import Link from "next/link";
interface SidenavProps {
  imgUrl: string;
  title: string;
  postId: string;
}

const RecommendationCard: React.FC<SidenavProps> = ({
  postId,
  imgUrl,
  title,
}) => {
  return (
    <Link
      href={`post/${postId}`}
      className="flex space-x-4 border-b-[1px] border-white pb-2"
    >
      <img src={imgUrl} alt="" className="w-28" />
      <article>
        <p className="line_clamp_3">{title}</p>
      </article>
    </Link>
  );
};

export default RecommendationCard;
