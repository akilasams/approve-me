import ImagePreview from "./ImagePreview";

const PreviewArea = () => {
  return (
    <div>
      <ImagePreview />
      <div className="action-btn-container">
        <div>
          <button className="btn-action approve">Approve</button>
          <button className="btn-action comment ">Add Comment</button>
          <button className="btn-action reject">Reject</button>
        </div>
        <button className="btn-action view">View Comments</button>
      </div>
    </div>
  );
};

export default PreviewArea;
