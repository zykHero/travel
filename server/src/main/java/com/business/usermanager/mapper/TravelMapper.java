package com.business.usermanager.mapper;

import com.business.usermanager.bean.Travel;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TravelMapper {
    List<Travel> getAllTravelSchedule();

    void addTravelSchedule(Travel travel);

    void updateTravelSchedule(Travel travel);

    void deleteTravelSchedule(String id);
}
