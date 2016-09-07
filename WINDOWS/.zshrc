# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load.
# Look in ~/.oh-my-zsh/themes/
ZSH_THEME="babun"

# Load plugins
plugins=(git)

# Load zsh stuff
source $ZSH/oh-my-zsh.sh

# Path
export PATH=$HOME/bin:/usr/local/bin:$PATH
export PATH=$PATH:.
# export MANPATH="/usr/local/man:$MANPATH"

# Preferred editor for local and remote sessions
export EDITOR='vim'

# ssh
# export SSH_KEY_PATH="~/.ssh/dsa_id"

# History file and size
HISTFILE=~/.history
SAVEHIST=5000
HISTSIZE=5000

# Append history
setopt APPEND_HISTORY

# Write after each command
setopt INC_APPEND_HISTORY

# Share history between shells
setopt SHARE_HISTORY

# Ignore dupes and reduce blanks
setopt HIST_IGNORE_DUPS
setopt HIST_IGNORE_ALL_DUPS
setopt HIST_REDUCE_BLANKS

# Personal stuff
bindkey -v
bindkey -M viins 'jj' vi-cmd-mode
bindkey '^R' history-incremental-search-backward

# aliases
alias rz='source ~/.zshrc' # shell reload after configuration changes
alias ez='vim ~/.zshrc' # change this file
alias 6it='cd /cygdrive/c/Users/Kevin/Git' # go to git directory
