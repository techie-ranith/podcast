interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className={`
              relative
              mx-auto
              h-screen
              
          `}
    >
      {children}
    </div>
  )
}

export default Container
