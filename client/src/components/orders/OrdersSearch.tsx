import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Search } from "lucide-react";

interface OrdersSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  type?: 'orders' | 'production';
}

export default function OrdersSearch({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  type = 'orders',
}: OrdersSearchProps) {
  const isProduction = type === 'production';
  
  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
      <div className="relative flex-1 sm:flex-none">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder={isProduction ? "ابحث..." : "ابحث..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 w-full sm:w-64 text-xs sm:text-sm"
          data-testid={isProduction ? "input-search-production" : "input-search-orders"}
        />
      </div>
      <Select value={statusFilter || ""} onValueChange={setStatusFilter}>
        <SelectTrigger className="w-full sm:w-48 text-xs sm:text-sm" data-testid="select-status-filter">
          <SelectValue placeholder="الحالة" />
        </SelectTrigger>
        <SelectContent>
          {isProduction ? (
            <>
              <SelectItem value="all">الكل</SelectItem>
              <SelectItem value="pending">معلق</SelectItem>
              <SelectItem value="in_progress">قيد التنفيذ</SelectItem>
              <SelectItem value="completed">مكتمل</SelectItem>
            </>
          ) : (
            <>
              <SelectItem value="all">الكل</SelectItem>
              <SelectItem value="waiting">انتظار</SelectItem>
              <SelectItem value="in_production">إنتاج</SelectItem>
              <SelectItem value="paused">معلق</SelectItem>
              <SelectItem value="completed">مكتمل</SelectItem>
              <SelectItem value="received">مستلم</SelectItem>
              <SelectItem value="delivered">توصيل</SelectItem>
            </>
          )}
        </SelectContent>
      </Select>
    </div>
  );
}
