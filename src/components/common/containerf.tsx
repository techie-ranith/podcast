interface ContainerfProps {
  children: React.ReactNode
}

const Containerf: React.FC<ContainerfProps> = ({ children }) => {
  return (
    <div
      className={`
        relative
        max-w-[1500px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-10
        px-2
        h-full
        `}
    >
      {children}
    </div>
  )
}

export default Containerf
