const output = document.getElementById("output");

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("regName").value,
      email: document.getElementById("regEmail").value,
      password: document.getElementById("regPassword").value
    })
  });

  output.textContent = JSON.stringify(await response.json(), null, 2);
});

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: document.getElementById("loginEmail").value,
      password: document.getElementById("loginPassword").value
    })
  });

  const data = await response.json();

  if (data.token) {
    localStorage.setItem("jwt", data.token);
    output.textContent = "Login successful. JWT token saved in localStorage.";
  } else {
    output.textContent = JSON.stringify(data, null, 2);
  }
});

document.getElementById("protectedBtn").addEventListener("click", async () => {
  const token = localStorage.getItem("jwt");

  if (!token) {
    output.textContent = "Please login first.";
    return;
  }

  const response = await fetch("/api/protected", {
    headers: { Authorization: `Bearer ${token}` }
  });

  output.textContent = JSON.stringify(await response.json(), null, 2);
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("jwt");
  output.textContent = "Logged out. JWT removed.";
});