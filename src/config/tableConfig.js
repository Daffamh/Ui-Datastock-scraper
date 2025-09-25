// Import komponen baris
import TableRowFeedlot from '../components/TableRowFeddlot';
import TableRowAbattoir from '../components/TableRowAbattoir';
import TableRowLncs from '../components/TablerowLncs';

// Import fungsi fetch dari repository
import { 
  fetchFeedlots,
  fetchAbattoirs,
  fetchlncs 
} from '../repository';

// Ekspor semua mapping
export const FETCH_FUNCTIONS = {
  feedlot: fetchFeedlots,
  abattoir: fetchAbattoirs,
  lncs: fetchlncs,
};

export const TABLE_HEADERS = {
  feedlot: ['name', 'address', 'Latitude', 'Longitude'],
  abattoir: ['name', 'address', 'Latitude', 'Longitude'],
  lncs: ['name', 'packing_list_number', 'actual_number'],
};

export const ROW_COMPONENTS = {
  feedlot: TableRowFeedlot,
  abattoir: TableRowAbattoir,
  lncs: TableRowLncs,
};