package com.business.usermanager.dao;

import com.business.usermanager.bean.Travel;
import com.business.usermanager.mapper.TravelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class TravelDao {
    @Autowired
    private TravelMapper travelMapper;

    public List<Travel> getAllTravelSchedule() {
        return travelMapper.getAllTravelSchedule();
    }

    public void updateTravelSchedule(Travel travel) {
        travelMapper.updateTravelSchedule(travel);
    }

    public void addTravelSchedule(Travel travel) {
        travelMapper.addTravelSchedule(travel);
    }

    public void deleteTravelSchedule(String id) {
        travelMapper.deleteTravelSchedule(id);
    }
}
