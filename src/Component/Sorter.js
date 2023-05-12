import "../css/sorter.css";

const Sorter = ({ sortByHot, sortByNew, sortByTop }) => {
  return (
    <div id="sorter">
      <button id="hot" onClick={sortByHot}>
        Hot
      </button>
      <button id="new" onClick={sortByNew}>
        New
      </button>
      <button id="top" onClick={sortByTop}>
        Top
      </button>
    </div>
  );
};

export default Sorter;
