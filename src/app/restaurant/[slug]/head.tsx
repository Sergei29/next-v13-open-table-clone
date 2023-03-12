type PageProps = { params: { slug: string } };

const Head = ({ params }: PageProps) => {
  return (
    <>
      <title>{`Open Table  | Restaurant | ${params.slug}`}</title>
      <meta
        name="description"
        content={`Open Table Clone application. Restaurant ${params.slug}`}
      />
    </>
  );
};

export default Head;
