import { GetData } from '@/components/services/Api';
import { Button, TablesUi, TemplatesUi, Title } from '@/components/ui';
import { Modals } from '@/components/utils';
import { Can } from '@/components/utils/access';
import { showAlert } from '@/components/utils/alert';
import { Suspense, useEffect, useState } from 'react';
export default function ProductTable() {
  const [search, setSearch] = useState('');
  const [product, setProduct] = useState([]);
  const [openmodal, setOpenModal] = useState(false);
  const [paginations, setPaginations] = useState(0);
  const tHeader = ['', 'Name', 'Price', 'Stock'];
  const getDataProducts = async () => {
    let endpoint = 'private/product/base';
    try {
      let result = await GetData({
        address: endpoint,
        pagination: paginations,
      });
      if (result.success || result.status) {
        setProduct(result.data != null ? result.data : []);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An unknown error occurred';
      showAlert({
        actions: 'error',
        title: 'kesalahan',
        timers: 2000,
        message: errorMessage,
      });
      console.log(errorMessage);
      console.log(search);
    }
  };
  useEffect(() => {
    setPaginations(0);
    getDataProducts();
  }, []);
  const handlesSearchChange = (e) => {
    setSearch(e.target.value);
  };
  // const filteredData = product?.filter((row)=>{
  //   return (
  //     row.product_name.toLowerCase().i
  //   )
  // })
  const handlerOpenModal = () => setOpenModal(true);
  const handlerCloseModal = () => setOpenModal(false);

  return (
    <>
      <TemplatesUi>
        <div className="flex justify-between items-center mb-4">
          <Title size="sm" children="Product List" className="font-semibold" />
          <Can access="addproduct">
            <Button size="xs" variant="success" onClick={handlerOpenModal}>
              + Add Product
            </Button>
          </Can>
        </div>

        {/* Search */}
        <TablesUi onChange={handlesSearchChange} tHeaders={tHeader}>
          {product.map((p, index) => (
            <tr key={p['id']} className="border-t">
              <th>{index + 1}</th>
              <td>{p['name']}</td>
              <td>{p['stock']}</td>
              <td>{p['stock']}</td>
            </tr>
          ))}
          {product.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center py-4 text-gray-500">
                No data found
              </td>
            </tr>
          )}
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
