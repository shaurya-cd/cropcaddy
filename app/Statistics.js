const data = [
   {
      number: 100000,
      label: 'Acres Sprayed'
   },
   {
      number: 56,
      label: 'Units Shipped'
   },
   {
      number: 2000,
      label: 'Farmers Onboard'
   }
]

function NumberStats({ number, label }) {
   return (
      <div className="flex flex-col items-center px-16 py-8">
         <h4 className="text-4xl font-bold">{number.toLocaleString()}</h4>
         <p className="text-sm">{label}</p>
      </div>
   )
}

function Statistics() {
  return (
   <div className="grid grid-cols-2 sm:grid-cols-3 max-w-screen-lg w-full">
      {data.map((value) => (
         <NumberStats key={value.label} {...value} />
      ))}
   </div>
  )
}

export default Statistics
