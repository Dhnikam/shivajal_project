import Link from "next/link";
export default function GridView({ item, col }) {
  return (
    <>
      <div className={col}>
        <div className="project-item">
          <div className="project-thumb">
            <Link href={`/project`}>
              <img src={`/assets/projects/${item.img}`} alt="" />
            </Link>
          </div>
          {/* <div className="project-content">
            <h3 className="title">
              <Link href={`/project`}>{item.title}</Link>
            </h3>
            <span>{item.location}</span>
          </div> */}
        </div>
      </div>
    </>
  );
}
