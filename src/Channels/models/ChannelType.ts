import { registerEnumType } from 'type-graphql'

export enum ChannelType {
	Private = 'private',
	Public = 'public',
}

registerEnumType(ChannelType, {
	name: 'ChannelType',
	description: 'Describes a channel type.',
})
