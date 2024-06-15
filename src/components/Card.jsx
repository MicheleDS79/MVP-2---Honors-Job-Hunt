const Card = ({ children, bg = 'bg-gray-100' }) => {
  return (
    <div className={`${bg} p-6 roundedlg shadow-md`}>{children}<div/>
        { children }
    </div>
  )
}

export default Card
