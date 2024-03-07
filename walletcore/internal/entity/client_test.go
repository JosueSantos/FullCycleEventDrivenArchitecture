package entity

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCreateNewClient(t *testing.T) {
	client, err := NewClient("Jos San", "j@j.com")
	assert.Nil(t, err)
	assert.NotNil(t, client)
	assert.Equal(t, "Jos San", client.Name)
	assert.Equal(t, "j@j.com", client.Email)
}

func TestCreateNewClientWhenArgsAreInvalid(t *testing.T) {
	client, err := NewClient("", "")
	assert.NotNil(t, err)
	assert.Nil(t, client)
}

func TestUpdateClient(t *testing.T) {
	client, _ := NewClient("Jos San", "j@j.com")
	err := client.Update("Jos San Update", "j@j.com")
	assert.Nil(t, err)
	assert.Equal(t, "Jos San Update", client.Name)
	assert.Equal(t, "j@j.com", client.Email)
}

func TestUpdateClientWithInvalidArgs(t *testing.T) {
	client, _ := NewClient("Jos San", "j@j.com")
	err := client.Update("", "j@j.com")
	assert.Error(t, err, "name is required")
}

func TestAddAccountToClient(t *testing.T) {
	client, _ := NewClient("Jos San", "j@j")
	account := NewAccount(client)
	err := client.AddAccount(account)
	assert.Nil(t, err)
	assert.Equal(t, 1, len(client.Accounts))
}
