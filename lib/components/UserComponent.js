'use strict';

const Component = require('./Component')
    , ApiConstants = require('../Constants').API;

/**
 * User-related API component
 */
class UserComponent extends Component {
    /**
     * Gets general user information.
     * @param  {String}             user        The username or id to lookup.
     * @param  {Mode|Number}        mode        The gamemode.
     * @param  {Number}             eventDays   The max number of event days.
     * @param  {LookupType|String}  lookupType  The lookup type, id/string to lookup the user.
     * @return {Promise<Object>}                The object from the API.
     */
    get(user, mode, eventDays, lookupType) {
        let options = { u: user };
        if (mode)
            options.m = mode;
        if (eventDays)
            options.event_days = eventDays;
        if (lookupType)
            options.type = lookupType

        return this.api.requester.get(ApiConstants.USER_GET, true, options)
            .then(d => d[0]); // there can only be one user
    }

    /**
     * Gets the top scores for the user specified.
     * @param  {String}             user        The username or id to lookup.
     * @param  {Mode|Number}        mode        The gamemode.
     * @param  {Number}             limit       Amount of results to limit to.
     * @param  {LookupType|String}  lookupType  The lookup type, id/string to lookup the user.
     * @return {Promise<Object>}                The object from the API.
     */
    getBest(user, mode, limit, lookupType) {
        let options = { u: user };
        if (mode)
            options.m = mode;
        if (limit)
            options.limit = limit;
        if (lookupType)
            options.type = lookupType;

        return this.api.requester.get(ApiConstants.USER_GET_BEST, true, options);
    }

    /**
     * Gets the recent plays for the user specified.
     * @param  {String}             user        The username or id to lookup.
     * @param  {Mode|Number}        mode        The gamemode.
     * @param  {Number}             limit       Amount of results to limit to.
     * @param  {LookupType|String}  lookupType  The lookup type, id/string to lookup the user.
     * @return {Promise<Object>}                The object from the API.
     */
    getRecent(user, mode, limit, lookupType) {
        let options = { u: user };
        if (mode)
            options.m = mode;
        if (limit)
            options.limit = limit;
        if (lookupType)
            options.type = lookupType;

        return this.api.requester.get(ApiConstants.USER_GET_RECENT, true, options);
    }
}

module.exports = UserComponent;