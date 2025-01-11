export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { registerHandler } = await import('./monitoring/handler')
    registerHandler()
  }
}

