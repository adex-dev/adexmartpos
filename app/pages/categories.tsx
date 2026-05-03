import { Button, TablesUi, TemplatesUi, Title } from '@/components/ui';
import { Modals } from '@/components/utils';
import { Can } from '@/components/utils/access';
import { Suspense, useEffect, useState } from 'react';

export default function Categories() {
  const [search, setSearch] = useState('');
  const [lists, setLists] = useState([]);
  const [openmodal, setOpenModal] = useState(false);
  const [paginations, setPaginations] = useState(0);
  const fetchCategories = async (pagination = 0) => {};
  const tHeader = ['#', 'ID', 'Nama', 'Action'];
  useEffect(() => {
    setPaginations(0);
  }, []);

  const handlesSearching = (e: any) => {
    setSearch(e.target.value);
  };
  const handlerOpenModal = () => setOpenModal(true);
  const handlerCloseModal = () => setOpenModal(false);
  return (
    <>
      <TemplatesUi>
        <div className="flex justify-between items-center mb-4">
          <Title
            size="sm"
            children="Categories List"
            className="font-semibold"
          />
          <Can access="addproduct">
            <Button size="xs" variant="success" onClick={handlerOpenModal}>
              + Add Categories
            </Button>
          </Can>
        </div>
        <TablesUi tHeaders={tHeader}>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </TablesUi>
        {openmodal && (
          <Suspense fallback={null}>
            <Modals
              title="contoh modal"
              open={openmodal}
              onClose={handlerCloseModal}
            />
          </Suspense>
        )}
      </TemplatesUi>
    </>
  );
}
