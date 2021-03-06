/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Notification definition object
 *
 */
class NotificationContent {
  /**
   * Create a NotificationContent.
   * @property {string} name Notification name
   * @property {string} [title] Notification title
   * @property {string} body Notification body
   * @property {object} [customData] Notification custom data (such as badge,
   * color, sound, etc.)
   */
  constructor() {
  }

  /**
   * Defines the metadata of NotificationContent
   *
   * @returns {object} metadata of NotificationContent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NotificationContent',
      type: {
        name: 'Composite',
        className: 'NotificationContent',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            constraints: {
              MaxLength: 64,
              MinLength: 3
            },
            type: {
              name: 'String'
            }
          },
          title: {
            required: false,
            serializedName: 'title',
            constraints: {
              MaxLength: 128
            },
            type: {
              name: 'String'
            }
          },
          body: {
            required: true,
            serializedName: 'body',
            constraints: {
              MaxLength: 4000,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          customData: {
            required: false,
            serializedName: 'custom_data',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = NotificationContent;
