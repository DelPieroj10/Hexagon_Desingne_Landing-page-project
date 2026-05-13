// const elAgents      = document.getElementById('stat-agents');
// const elConnections = document.getElementById('stat-connections');
// const elFps         = document.getElementById('stat-fps');

export function updateStats(agentCount, connectionCount, fps, setStats) {
  setStats({
    agents: agentCount,
    connections: connectionCount,
    fps, 
  })
}

