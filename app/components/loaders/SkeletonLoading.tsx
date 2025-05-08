import React from 'react'

function SkeletonLoading() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-6 bg-gray-600 rounded w-1/3" />
      <div className="h-4 bg-gray-600 rounded w-2/3" />
      <div className="h-4 bg-gray-600 rounded w-full" />
      <div className="h-4 bg-gray-600 rounded w-5/6" />
    </div>
  )
}

export default SkeletonLoading