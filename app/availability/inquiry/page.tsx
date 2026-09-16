import { Suspense } from "react";
import InquiryForm from "./InquiryForm";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <InquiryForm />
    </Suspense>
  );
}
