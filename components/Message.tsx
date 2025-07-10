import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isChatGPT = message.user.name === "ChatGPT";

  return (
    <div
      className={`py-5 text-white ${
        isChatGPT ? "bg-gray-700" : "bg-gray-600/50"
      }`}
    >
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img
          src={message.user.avatar}
          alt="user image"
          className="h-8 w-8 rounded-md"
        />
        <p className="pt-1 text-sm leading-relaxed">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
