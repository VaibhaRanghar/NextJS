export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-slate-600 p-5">
        <p>OUR PRODUCTS RELATED SERVICES!</p>
      </div>
      {children}
      <div className="bg-teal-600 p-5">
        <p>THIS IS ALL WE HAVE!</p>
      </div>
    </>
  );
}
