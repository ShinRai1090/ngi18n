export const configuration = {
  partialURLs: {
    nodeAPI: {
      /**
       * Security Module
       */
      login: '/security/login/',
      logout: '/security/logout/',
      register: '/security/register/',
      validateSession: '/security/validateSession/',

      /**
       * Metadata Module
       */
      fetchMetadata: '/metadata/getData/',
      getSignedURL: '/metadata/getSignedURL/',
      getAllSignedURL: '/metadata/getAllSignedURL/',
      fetchMasterTags: '/metadata/fetchStandardTags/',
      addProgressStatus: '/metadata/addProgressStatus/',
      getProgressStatus: '/metadata/getProgressStatus/',
      updateStandardTags: '/metadata/updateStandardTags/',

      /**
       * Masters Module
       */
      getMasters: '/masters/fetchAll/',

      /**
       * Dicom Module
       */
      submitDicom: '/metadata/submitChanges/',

      /**
       * Elastic Module
       */
      searchIndex: '/elasticSearch/searchIndex/',
      standardTags: '/elasticSearch/fetchStandardTags/',
      standardTagsWithLoader: '/elasticSearch/fetchStandardTagsWL/',
      searchResults: '/elasticSearch/fetchSearchResults/',
      searchUniqueResults: '/elasticSearch/fetchSearchResultsExc/',
      searchResultsScroll: '/elasticSearch/fetchSearchResultsScroll/',
      searchResultsGroup: '/elasticSearch/fetchSearchResultsGroup/',
      searchResultsGroupScroll: '/elasticSearch/fetchSearchResultsGroupScroll/',
      searchResultsCount: '/elasticSearch/fetchSearchResultsCount/',
      searchChildData: '/elasticSearch/fetchSearchChildData/',

      /**
       * Dashboard Module
       */
      fetchModalityTypes: '/elasticSearch/fetchModalityTypes/',
      fetchSearchData: '/elasticSearch/fetchSearchData/',
      fetchTrialNonTrial: '/elasticSearch/fetchTrialNonTrial/',
      fetchSegregationDatasource: '/elasticSearch/fetchSegregationDatasource/',
      fetchDataRegionwise: '/elasticSearch/fetchDataRegionwise/',
      fetchTrialComparison: '/elasticSearch/fetchTrialComparison/',
      fetchEHRSearchData: '/elasticSearch/fetchEHRSearchResults/',
      fetchEHRSearchDataScroll: '/elasticSearch/fetchEHRSearchResultsScroll/',


      /**
       * User Permissions Module
       */
      getUserPermissions: '/permissions/getUserPermissions/',
      getUserGroupPermissions: '/permissions/getUserGroupPermissions/',

      /**
       * Audit Log Module
       */
      addLogEntry: '/auditLog/addLogEntry/',
      getAuditLogs: '/auditLog/getAuditLogs/',
      getAuditLogsCount: '/auditLog/getAuditLogsCount',
      getUsersList: '/auditLog/getUsersList',
      downloadCSV: '/exportLogs/csvDownload',

      /**
       * Admin Module
       */
      fetchGroupMaster: '/admin/fetchGroupMaster/',
      fetchGroups: '/admin/fetchAllGroups/',
      fetchUsers: '/admin/fetchAllUsers/',
      fetchPermissions: '/admin/fetchPermissions/',
      fetchGroupPermissions: '/admin/fetchGroupPermissions/',
      addUpdateGroup: '/admin/addUpdateAccessGroup/',
      addUpdateUserGroup: '/admin/updateUsersGroup/',
      deactivateGroup: '/admin/deactivateGroup/',
      addUpdateUser: '/admin/addUpdateUsers/',
      deactivateUser: '/admin/deactivateUser/',
      addUpdateGroupPermissions: '/admin/addUpdateGroupPermissions/',
      fetchPermissionGroups: '/admin/fetchPermissionGroups/',
      updatePermissionGroups: '/admin/updatePermissionGroups/',

      fetchGroupExclusions: '/admin/fetchGroupExclusions/',
      addUpdateGroupExclusions: '/admin/addUpdateGroupExclusions/',
      deleteDataExclusion: '/admin/deleteDataExclusion/',

      getAzureUserPermissions: '/permissions/getAzureUserPermissions/',
      updateUserAzureDetails: '/admin/updateUserAzureDetails/',

      //  Search Module
      addUpdateUserSearch: '/search/addUpdateUserSearch',
      updateUserSearch: '/search/updateUserSearch',
      deleteUserSearch: '/search/deleteUserSearch',
      getUserSearchPresets: '/search/getUserSearchPresets',
      getUserSavedSearches: '/search/getUserSavedSearches',

      // Support Module
      alphaFeedback: '/support/alphaFeedback/',

      // PubSub Module
      publishDicomUpload: '/pubsub/publishDicomUpload/',
      validateLoginSession: '/pubsub/validateLoginSession/'
    }
  },
  homepageRoute: 'search',
  loginFeatureCode: 'azure',
  elasticURLs: {
    // imageSearch: '/dicomimages/_search/'
    imageSearch: '/demo/_search/',
    standardTags: '/datastore/_search/'
  },
  callType: {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete'
  },
  validUploadMimeTypes: ['application/dicom'],
  validUploadExtensions: ['rdl'],
  azureSettings: {
    clientId: 'clientId',
    tenantId: 'tenantId',
    objectId: 'objectId',
    scopes: [
      'user.read',
      'directory.read.all'
    ]
  },
  firebaseConfig: {
    apiKey: 'apiKey',
    authDomain: 'projectId.firebaseapp.com',
    databaseURL: 'https://projectId.firebaseio.com',
    projectId: 'projectId',
    storageBucket: 'storageBucket',
    messagingSenderId: 'messagingSenderId',
    appId: 'appId',
    measurementId: 'measurementId'
  },
  permissionType: {
    FORM: 'form',
    MENU: 'menu',
    STUDY: 'study'
  },
  storageTypes: {
    InMemory: 'InMemory',
    LocalStorage: 'LocalStorage',
    SessionStorage: 'SessionStorage'
  },
  contentTypes: {
    JSON: 'json',
    BASE64: 'base64',
    ZIP: 'zip',
    PDF: 'pdf',
    XML: 'xml',
    SQL: 'sql',
    CSV: 'csv'
  },
  uploadType: {
    uploadModeQueue: false,
    queueCount: 1
  },
  pubsubData: {
    // emailCC: ['markus@bayer.com', 'martin@bayer.com']
    emailCC: ['mamta.shettigar@quantiphi.com', 'fascel.fernandes@quantiphi.com']
  }
};
