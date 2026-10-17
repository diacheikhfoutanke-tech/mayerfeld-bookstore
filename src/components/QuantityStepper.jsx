// QuantityStepper component: controls the quantity of a book
function QuantityStepper({ quantity, onQuantityChange }) {
  return (
    <div className="mt-4 flex items-center gap-3">
      <span className="text-sm text-[#6b706b]">Quantity</span>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          disabled={quantity <= 1}
          aria-label="Decrease quantity"
          className="flex h-8 w-8 items-center justify-center rounded border border-[#e5ded3] disabled:cursor-not-allowed disabled:opacity-40"
        >
          −
        </button>

        <span
          className="min-w-6 text-center text-sm font-semibold"
          aria-live="polite"
        >
          {quantity}
        </span>

        <button
          type="button"
          onClick={() => onQuantityChange(quantity + 1)}
          aria-label="Increase quantity"
          className="flex h-8 w-8 items-center justify-center rounded border border-[#e5ded3]"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityStepper;
