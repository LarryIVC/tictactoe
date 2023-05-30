export const Cell = ({ children, updateBoard, index, isSelected }) => {
  const className = `cell_content ${isSelected ? 'isSelected' : ''}`;
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};