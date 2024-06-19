function dijkstra(graph, start) {
    // Set up for the algorithm
    const distances = {}; 
    const visited = new Set(); 
    distances[start] = 0; 
  
    
    const pq = [{ distance: 0, node: start }];
  
    // Dijkstra's Algorithm loop
    while (pq.length > 0) {
      // Get the unvisited node with the shortest tentative distance
      const { distance, node } = pq.pop();
  
    
      if (visited.has(node)) continue;
  
      
      visited.add(node);
  
      
      for (const neighbor in graph[node]) {
        const newDistance = distance + graph[node][neighbor];
        if (!distances[neighbor] || newDistance < distances[neighbor]) {
          distances[neighbor] = newDistance;
          pq.push({ distance: newDistance, node: neighbor });
        }
      }
    }
  
    // Return the distances object
    return distances;
  }
  
  // Example usage
  const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
  };
  
  const distances = dijkstra(graph, 'A');
  console.log(distances);
  