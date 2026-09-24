// Helper to compute the next valid delivery window for a timezone
export function getNextDeliveryTime(now: Date, windows: readonly number[], timeZone: string): Date {
  const sorted = [...windows].sort((a, b) => a - b);
  const fallbackTz = timeZone || 'UTC';
  
  const formatter = new Intl.DateTimeFormat('en-US', { timeZone: fallbackTz, hour: 'numeric', minute: 'numeric', hourCycle: 'h23' });
  
  const candidate = new Date(now.getTime());
  candidate.setUTCSeconds(0, 0);
  candidate.setTime(candidate.getTime() + 60000);

  for (let i = 0; i < 72 * 60; i++) {
    const parts = formatter.formatToParts(candidate);
    const localHour = parseInt(parts.find(p => p.type === 'hour')!.value, 10);
    const localMinute = parseInt(parts.find(p => p.type === 'minute')!.value, 10);
    
    if (sorted.includes(localHour) && localMinute === 0) {
      return candidate;
    }
    candidate.setTime(candidate.getTime() + 60000);
  }
  
  return new Date(now.getTime() + 60 * 60 * 1000);
}
