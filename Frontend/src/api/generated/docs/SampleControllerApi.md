# SampleControllerApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getForm**](SampleControllerApi.md#getform) | **GET** /api/form |  |
| [**submitForm**](SampleControllerApi.md#submitform) | **POST** /api/form |  |



## getForm

> string getForm()



### Example

```ts
import {
  Configuration,
  SampleControllerApi,
} from '';
import type { GetFormRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new SampleControllerApi();

  try {
    const data = await api.getForm();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitForm

> string submitForm()



### Example

```ts
import {
  Configuration,
  SampleControllerApi,
} from '';
import type { SubmitFormRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new SampleControllerApi();

  try {
    const data = await api.submitForm();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

