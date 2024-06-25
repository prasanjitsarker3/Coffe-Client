"use client";

import { Button, Card, Spacer } from "@nextui-org/react";
import { Ban, CheckCircle, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PaymentStatusPage = ({ searchParams }: any) => {
  const status = searchParams.status;
  const router = useRouter();

  if (status) {
    router.refresh();
  }

  let icon;
  let title;

  switch (status) {
    case "success":
      icon = <CheckCircle className="text-green-500 w-16 h-16" />;
      title = "Payment Successful";
      break;
    case "cancel":
      icon = <X className="text-red-500 w-16 h-16" />;
      title = "Payment Cancelled";
      break;
    case "failed":
      icon = <Ban className="text-red-500 w-16 h-16" />;
      title = "Payment Failed";
      break;
    default:
      icon = null;
      title = "Unknown Status!";
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="max-w-md p-5 text-center">
        <div className=" flex justify-center items-center"> {icon}</div>
        <h2 className="text-2xl font-semibold my-4">{title}</h2>
        <Spacer y={1.5} />
        {status === "success" ? (
          <Link href="/dashboard" passHref>
            <Button className="bg-blue-500 text-white hover:bg-blue-700">
              Go To Dashboard
            </Button>
          </Link>
        ) : (
          <Link href="/" passHref>
            <Button className="bg-blue-500 text-white hover:bg-blue-700">
              Book Again
            </Button>
          </Link>
        )}
      </Card>
    </div>
  );
};

export default PaymentStatusPage;
