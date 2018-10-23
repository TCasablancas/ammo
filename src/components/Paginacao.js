import React from 'react';

class Paginacao extends React.Component{

  render(){
    return(
      <div>
        <Pagination total={total} limit={limit} pageCount={pageCount} currentPage={currentPage}>
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (
            <div>
              <a href="/?page=1">first</a>
              {hasPreviousPage && <a href={`/?page=${previousPage}`}>{'<'}</a>}
              {pages.map(page => {
                return (
                  <a
                    key={page}
                    style={currentPage === page ? { backgroundColor: '#fdce09' } : null}
                    href={`/?page=${page}`}
                  >
                    {page}
                  </a>
                );
              })}
              {hasNextPage && <a href={`/?page=${nextPage}`}>{'>'}</a>}
              <a href={`/?page=${totalPages}`}>last</a>
            </div>
          )}
        </Pagination>
      </div>
    );
  }
}

export default Paginacao;
