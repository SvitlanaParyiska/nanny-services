import Filter from 'components/Filter';
import { ref, get } from 'firebase/database';
// query, orderByKey, limitToFirst;
import { db } from '../../firebase';
import { useDispatch } from 'react-redux';
// import { selectFilter, selectItems } from '../../redux/selectors';
import { useEffect } from 'react';
import NanniesList from 'components/NanniesList';
import { setNannies } from '../../redux/nannySlice';

function NanniesPage() {
  // const [allNannies, setAllNannies] = useState([]);
  // const nannies = useSelector(selectItems);
  // const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllTeachers = async () => {
      try {
        const nanniesRef = ref(db, '/');
        const snapshot = await get(nanniesRef);

        if (snapshot.exists()) {
          const newNannies = snapshot.val();
          dispatch(setNannies(newNannies));
          console.log();
        }
      } catch (error) {
        console.error('Loading error', error.message);
      }
    };

    fetchAllTeachers();
  }, [dispatch]);

  return (
    <main>
      <section className="container">
        <Filter />
        <NanniesList />
      </section>
    </main>
  );
}

export default NanniesPage;
