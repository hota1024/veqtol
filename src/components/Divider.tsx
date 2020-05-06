export const Divider = () => {
  return (
    <>
      <hr className="divider" />

      <style jsx>{`
        .divider {
          border: none;
          height: 1px;
          margin: 0;
          flex-shrink: 0;
          background: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  )
}
