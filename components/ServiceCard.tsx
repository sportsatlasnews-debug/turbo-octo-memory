type Props = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="p-6 border rounded">
      <h2 className="font-semibold text-xl">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}