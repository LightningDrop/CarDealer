package com.cardealer.Service;

import java.util.List;

import com.cardealer.Model.Vehicle;
import com.cardealer.Repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class VehicleServiceImpl implements com.cardealer.Service.VehicleService {

	@Autowired
	VehicleRepository vehicleRepository;

	@Override
	public int save(Vehicle vehicle) {
		return vehicleRepository.save(vehicle);
	}

	@Override
	public int update(Vehicle vehicle) {
		return vehicleRepository.update(vehicle);
	}

	@Override
	public int deleteById(String id) {
		return vehicleRepository.deleteById(id);
	}

	@Override
	public List<Vehicle> findAll() {
		return vehicleRepository.findAll();
	}

	public List<Vehicle> findAllTrucks() {
		return vehicleRepository.findAllTrucks();
	}
	public List<Vehicle> findAllMotorcycles() {
		return vehicleRepository.findAllMotorcycles();
	}
	public List<Vehicle> findAllRVs() {
		return vehicleRepository.findAllRVs();
	}
	public List<Vehicle> findAllCars() {
		return vehicleRepository.findAllCars();
	}

	@Override
	public Vehicle findById(String id) {
		return vehicleRepository.findById(id);
	}

	public int vehicleCount() {
		return vehicleRepository.vehicleCount();
	}


}
