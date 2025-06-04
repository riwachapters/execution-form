"use client"

import React from "react" // Simplified imports
import { FinancialTableDataPayload } from "@/types"
import { ExecutionForm } from "@/features/execution/components/execution-form" // Import the moved component

// All ExecutionForm component code and its specific imports have been removed from here.

// Default export for the page
export default function ExecutionPage() {
  // You might want to fetch or pass initial props here
  // For now, let's use some placeholder data or defaults
  // This is a basic setup; you'll need to adjust it based on how you get data
  // for the Execution (e.g., from API, context, etc.)

  const initialData = undefined; // Or some fetched data
  const fiscalYear = "2024"; // Example fiscal year
  const readOnly = false;
  const selectedHealthCenter = ""; // Example
  const selectedReportingPeriod = ""; // Example
  const isHospitalMode = false;

  const handleSave = (data: FinancialTableDataPayload) => {
    console.log("Saving data:", data);
    // Implement your save logic here
  };

  return (
    <div className="container mx-auto p-4">
      <ExecutionForm
        data={initialData}
        fiscalYear={fiscalYear}
        onSave={handleSave}
        readOnly={readOnly}
        selectedHealthCenter={selectedHealthCenter}
        selectedReportingPeriod={selectedReportingPeriod}
        isHospitalMode={isHospitalMode}
      />
    </div>
  );
} 