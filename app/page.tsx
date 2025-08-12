export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nevada + Federal LLC Compliance Tracker
          </h1>
          <p className="text-lg text-gray-600">
            Track your business compliance requirements and deadlines
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Obligations
            </h2>
            <p className="text-gray-600">
              View and manage your compliance obligations
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Policies
            </h2>
            <p className="text-gray-600">
              Track your business policies and renewals
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Alerts
            </h2>
            <p className="text-gray-600">
              Stay informed about upcoming deadlines
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
