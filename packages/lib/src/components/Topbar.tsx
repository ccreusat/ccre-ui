interface TopbarProps {
  count: number;
  icon: JSX.Element;
  button: JSX.Element;
}
export const Topbar = ({ count, icon, button }: TopbarProps) => {
  return (
    <div className="topbar b-radius-10">
      <div className="d-inline-flex gap-16">
        {icon}
        <strong>{count > 0 ? `${count} suggestions` : `0 suggestion`}</strong>
      </div>
      {button}
    </div>
  );
};
