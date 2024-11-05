import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { fetchData } from "./data";

const LinkTreeNode = ({ linkTreeNode, level }) => {
  const [expanded, setExpanded] = useState(false);
  const { id, name, children: subLinkTree } = linkTreeNode;
  return (
    <div key={id} className={styles.treeContainer}>
      <div className={styles.treeNodeContainer}>
        <div className={styles.treeNodeExpander} onClick={() => setExpanded(!expanded)} style={{ marginLeft: `${level * 10}px` }}>
          {subLinkTree ? (expanded ? "↓" : "→") : "•"}
        </div>
        <a href={`something/${name}`}>{name}</a>
      </div>
      {subLinkTree?.length && expanded && <LinkTree linkTree={subLinkTree} level={level + 1} />}
    </div>
  );
};

const LinkTree = ({ linkTree, level }) => {
  return linkTree.map((linkTreeNode) => <LinkTreeNode key={linkTreeNode.id} linkTreeNode={linkTreeNode} level={level + 1} />);
};

const App = () => {
  const { data, loading, error } = useLoadData();

  if (error.isError) {
    return error.msg;
  }
  if (loading) {
    return "loading";
  }
  if (!data) {
    return null;
  }
  return (
    <div className={styles.container}>
      <LinkTree linkTree={data} level={0} />
    </div>
  );
};

const useLoadData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ isError: false, msg: null });

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchData();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError({ isError: true, msg: error.message });
        console.error(error);
      }
    };
    loadData();
  }, []);

  return { data, loading, error };
};

export default App;
