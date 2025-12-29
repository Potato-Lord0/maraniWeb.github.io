const stripe = Stripe("pk_test_51XXXXXXXXXXXXXXX"); // Replace with your Stripe TEST public key

function donate(amount) {
  alert(`Stripe Checkout Test: $${amount} donation`);
  // In production, redirect to Stripe Checkout session created on your backend
}

function customDonate() {
  const amount = prompt("Enter donation amount (USD):");
  if (amount) {
    donate(amount);
  }
}
