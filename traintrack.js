var stations = [];

        document.getElementById('add-station').onclick = function() {
            var stationName = document.getElementById('station-name').value;
            var stationCapacity = parseInt(document.getElementById('station-capacity').value);
            var trainsAtStation = parseInt(document.getElementById('trains-at-station').value);

            if (stationName && !isNaN(stationCapacity) && !isNaN(trainsAtStation)) {
                var station = { name: stationName, capacity: stationCapacity, trains: trainsAtStation };
                stations.push(station);
                updateDisplay();
                document.getElementById('station-name').value = '';
                document.getElementById('station-capacity').value = '';
                document.getElementById('trains-at-station').value = '';
            }
        };

        function updateDisplay() {
            var list = document.getElementById('station-list');
            list.innerHTML = '';
            stations.forEach(station => {
                var li = document.createElement('li');
                li.className = 'station-item';
                if (station.trains > station.capacity) li.classList.add('exceeded');
                li.innerHTML = `Station: ${station.name} Capacity: ${station.capacity} Trains: ${station.trains}`;
                list.appendChild(li);
            });
        }