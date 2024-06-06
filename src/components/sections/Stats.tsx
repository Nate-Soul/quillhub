const Stats = () => {

    const stats = [
        {
            id: 1,
            amount: "100k",
            measure: "Users"
        },
        {
            id: 2,
            amount: "28",
            measure: "Partnerships"
        },
        {
            id: 3,
            amount: "78k",
            measure: "Reviews"
        },
    ];

  return (
    <div className="py-8">
      <div className="container grid grid-cols-3 gap-0">
        {stats?.map(stat => (
            <div key={stat.id} className="flex flex-col gap-y-2 justify-center items-center text-center text-primary-900">
                <h6 className="text-5xl font-bold inline-flex items-center gap-x-1 after:content-['+']">{stat.amount}</h6>
                <p className="text-lg">{stat.measure}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
