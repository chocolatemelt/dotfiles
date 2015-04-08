#
# Executes commands at the start of an interactive session.
#
# Authors:
#   Sorin Ionescu <sorin.ionescu@gmail.com>
#

# Source Prezto.
if [[ -s "${ZDOTDIR:-$HOME}/.zprezto/init.zsh" ]]; then
  source "${ZDOTDIR:-$HOME}/.zprezto/init.zsh"
fi

# Source powershell config script
if [[ -r /usr/lib/python3.4/site-packages/powerline/bindings/zsh/powerline.zsh ]]; then
    source /usr/lib/python3.4/site-packages/powerline/bindings/zsh/powerline.zsh
fi

# Customize to your needs...
# prompt walters
prompt paradox
export EDITOR="vim"

# History file and size
HISTFILE=~/.zhistory
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

# vim command line interface
bindkey -v
bindkey -M viins 'jj' vi-cmd-mode
bindkey '^R' history-incremental-search-backward

# aliases
alias windows='sudo ntfs-3g /dev/sda5 /media/c' # mounts windows (requires ntfs-3g to be installed)
alias unwindows='sudo umount /media/c' # unmounts windows
alias syupdate='sudo pacman -Syu' # system upgrade
alias rz='source ~/.zshrc' # shell reload after configuration changes
alias ez='vim ~/.zshrc' # change this file
alias 6it='cd /home/zhang/Documents/Git' # go to git directory

# stackoverflow.com/questions/171563/whats-in-your-zshrc
