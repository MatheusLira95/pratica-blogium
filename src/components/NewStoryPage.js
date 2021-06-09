import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import PostManipulation from "./PostManipulation/PostManipulation";

export default function NewStoryPage() {
  const [title, setTitle] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [content, setContent] = useState("");
  const [isSaveButtonDisabled, setSaveButtonDisable] = useState(false);
  const history = useHistory();

  function onPostSaveButtonClick() {
    const newContent = content.substring(3, content.length - 4);
    const body = {
      title,
      coverUrl,
      contentPreview: `${newContent.substring(0, 20)}...`,
      content: newContent,
    };
    const request = axios.post("http://localhost:4000/new-story", body);
    request.then((res) => {
      console.log("Deu bom");
    });
    request.catch(() => {
      alert("Deu ruim, tente novamente");
    });
  }

  return (
    <PostManipulation
      title={title}
      onTitleChange={(newTitle) => setTitle(newTitle)}
      coverUrl={coverUrl}
      onCoverUrlChange={(newCoverUrl) => setCoverUrl(newCoverUrl)}
      content={content}
      onContentChange={(newContent) => setContent(newContent)}
      onPostSaveButtonClick={onPostSaveButtonClick}
      isSaveButtonDisabled={isSaveButtonDisabled}
    />
  );
}
