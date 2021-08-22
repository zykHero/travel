package com.business.usermanager.controller;

import com.alibaba.fastjson.JSONObject;
import com.business.usermanager.bean.Travel;
import com.business.usermanager.bean.TravelRes;
import com.business.usermanager.dao.TravelDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 旅行信息接口
 */
@RestController
public class TravelController {

    @Autowired
    private TravelDao travelDao;

    /**
     * 获取所有旅行信息
     *
     * @param
     * @param
     * @return
     */
    @RequestMapping(value = "/allTravelSchedule", method = RequestMethod.GET)
    public String getAllTravelSchedule() {
        TravelRes res = new TravelRes();
        try {
            List<Travel> travelInfo = travelDao.getAllTravelSchedule();
            res.setTravelSchedules(travelInfo);
        } catch (Exception e) {
            res.setCode("1");
            res.setMsg("fail");
            return JSONObject.toJSONString(res);
        }
        res.setCode("0");
        res.setMsg("success");
        return JSONObject.toJSONString(res);
    }

    @RequestMapping(value = "/updateTravelSchedule", method = RequestMethod.POST)
    public String updateTravelSchedule(Travel travel) {
        TravelRes res = new TravelRes();
        try {
            travelDao.updateTravelSchedule(travel);
        } catch (Exception e) {
            res.setCode("1");
            res.setMsg("fail");
            return JSONObject.toJSONString(res);
        }
        res.setCode("0");
        res.setMsg("success");
        return JSONObject.toJSONString(res);
    }

    @RequestMapping(value = "/addTravelSchedule", method = RequestMethod.POST)
    public String addTravelSchedule(Travel travel) {
        TravelRes res = new TravelRes();
        try {
            travelDao.addTravelSchedule(travel);
        } catch (Exception e) {
            res.setCode("1");
            res.setMsg("fail");
            return JSONObject.toJSONString(res);
        }
        res.setCode("0");
        res.setMsg("success");
        return JSONObject.toJSONString(res);
    }

    @RequestMapping(value = "/delTravelSchedule", method = RequestMethod.POST)
    public String delTravelSchedule(String id) {
        TravelRes res = new TravelRes();
        try {
            travelDao.deleteTravelSchedule(id);
        } catch (Exception e) {
            res.setCode("1");
            res.setMsg("fail");
            return JSONObject.toJSONString(res);
        }
        res.setCode("0");
        res.setMsg("success");
        return JSONObject.toJSONString(res);
    }
}
