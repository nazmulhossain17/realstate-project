export default function AgentCard({ agent }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white border shadow-md">
      <img
        src={agent.image}
        alt={agent.name}
        className="w-24 h-24 rounded-full"
      />
      <h3 className="mt-2 text-lg font-semibold">
        {agent.name}{" "}
        {agent.verified && <span className="text-blue-500">✔️</span>}
      </h3>
      <p className="text-sm text-gray-500">{agent.phone}</p>
      <p className="text-sm text-gray-500">{agent.email}</p>
      <p className="mt-1 text-sm text-gray-500">
        {agent.listedProperties} Listed Properties
      </p>
    </div>
  );
}
