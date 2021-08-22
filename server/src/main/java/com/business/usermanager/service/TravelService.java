package com.business.usermanager.service;

import com.business.usermanager.bean.Travel;
import com.business.usermanager.dao.TravelDao;
import com.business.usermanager.util.CommonUtils;
import org.springframework.beans.factory.annotation.Autowired;

public class TravelService {
    @Autowired
    private TravelDao travelDao;
    public void addTravel(Travel travel) {
        String id = CommonUtils.generateUUID();
        travel.setId(id);
        travelDao.addTravelSchedule(travel);
    }
}
