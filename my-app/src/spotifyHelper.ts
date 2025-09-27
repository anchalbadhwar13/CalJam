// src/spotifyHelper.ts
export const CLIENT_ID = "82d0974813db41f1a623cdf770a8c7f3"; // replace
export const REDIRECT_URI = "https://abcd1234.ngrok.io/dashboard"; // replace with your ngrok URL

function base64encode(string: ArrayBuffer) {
  return btoa(String.fromCharCode.apply(null, new Uint8Array(string) as any))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export async function generateCodeChallenge(codeVerifier: string) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return base64encode(digest);
}

export function loginWithSpotify() {
  const codeVerifier = [...Array(128)].map(() => Math.random().toString(36)[2]).join('');
  localStorage.setItem('code_verifier', codeVerifier);

  generateCodeChallenge(codeVerifier).then(codeChallenge => {
    const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=user-read-private&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&code_challenge_method=S256&code_challenge=${codeChallenge}`;
    window.location.href = url;
  });
}

export async function getAccessToken(): Promise<string | null> {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const codeVerifier = localStorage.getItem("code_verifier") || "";

  if (!code) return null;

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
      code_verifier: codeVerifier
    })
  });
  const data = await res.json();
  return data.access_token;
}

export const CATEGORY_TO_SEED = {
  Workout: {
    seed_genres: ["work-out", "dance", "edm"],
    features: {
      min_energy: 0.7,
      max_energy: 1.0,
      min_tempo: 120,
      max_tempo: 150,
      min_valence: 0.5,
      max_valence: 0.8
    }
  }
} as const;

export type Category = keyof typeof CATEGORY_TO_SEED;